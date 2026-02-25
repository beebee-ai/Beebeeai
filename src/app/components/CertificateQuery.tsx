import React, { useState } from 'react';
import { Search, Award, CheckCircle, XCircle } from 'lucide-react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import CertificateDisplay from './CertificateDisplay';
import { useLanguage } from '../contexts/LanguageContext';
import { certificateContent, t } from '../locales/certificateContent';

type Certificate = {
  id: string;
  name: string;
  nameLower: string;
  courseNumber?: string;
  courseNumberUpper?: string;
  campType?: string;
  studentInfo?: string;
  imageUrl: string;
};

export default function CertificateQuery() {
  const [name, setName] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Certificate[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSearching(true);
    setHasSearched(false);
    setResults([]);
    setError(null);

    try {
      const nameNorm = name.trim().toLowerCase();
      const courseNorm = courseNumber.trim().toUpperCase();

      const colRef = collection(db, 'certificates');

      let q;
      if (courseNorm) {
        q = query(
          colRef,
          where('nameLower', '==', nameNorm),
          where('courseNumberUpper', '==', courseNorm)
        );
      } else {
        q = query(colRef, where('nameLower', '==', nameNorm));
      }

      const snap = await getDocs(q);
      const found: Certificate[] = snap.docs.map((doc) => {
        const data = doc.data() as Omit<Certificate, 'id'>;
        return { id: doc.id, ...data };
      });
      setResults(found);
    } catch (err: any) {
      setError(err.message ?? t(certificateContent.error.generic, language));
    } finally {
      setHasSearched(true);
      setIsSearching(false);
    }
  };

  return (
    <div className="py-16 px-4 relative overflow-hidden mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6900]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-[#ff6900]/10 rounded-2xl mb-6 border border-[#ff6900]/20">
            <Award className="w-8 h-8 text-[#ff6900]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t(certificateContent.hero.title, language)}
          </h1>
          <p className="text-gray-400 text-lg">
            {t(certificateContent.hero.subtitle, language)}
          </p>
        </div>

        <div className="bg-[#16181d] border border-white/5 rounded-3xl p-8 shadow-2xl mb-12">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  {t(certificateContent.form.nameLabel, language)}{' '}
                  <span className="text-[#ff6900]">
                    {t(certificateContent.form.nameRequiredMark, language)}
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(certificateContent.form.namePlaceholder, language)}
                  className="w-full bg-[#0f1115] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ff6900] focus:ring-1 focus:ring-[#ff6900] transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="courseNumber" className="block text-sm font-medium text-gray-300">
                  {t(certificateContent.form.courseLabel, language)}
                  <span className="text-gray-500 font-normal ml-1">
                    ({t(certificateContent.form.courseOptionalNote, language)})
                  </span>
                </label>
                <input
                  type="text"
                  id="courseNumber"
                  value={courseNumber}
                  onChange={(e) => setCourseNumber(e.target.value)}
                  placeholder={t(certificateContent.form.coursePlaceholder, language)}
                  className="w-full bg-[#0f1115] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ff6900] focus:ring-1 focus:ring-[#ff6900] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSearching || !name.trim()}
              className="w-full bg-[#ff6900] hover:bg-[#ff6900]/90 disabled:bg-[#ff6900]/50 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              {isSearching ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{t(certificateContent.form.loading, language)}</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  {t(certificateContent.form.submit, language)}
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 text-center text-sm text-red-400">
              {error}
            </div>
          )}
        </div>

        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {results.length > 0 ? (
              <div className="space-y-12">
                <div className="flex items-center justify-center gap-2 text-emerald-400 bg-emerald-400/10 py-3 px-6 rounded-full w-fit mx-auto border border-emerald-400/20">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    {t(certificateContent.result.success, language).replace(
                      '{count}',
                      String(results.length),
                    )}
                  </span>
                </div>
                
                <div className="space-y-16">
                  {results.map(cert => (
                    <CertificateDisplay key={cert.id} certificate={cert} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <XCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(certificateContent.result.notFoundTitle, language)}
                </h3>
                <p className="text-gray-400">
                  {t(certificateContent.result.notFoundLine1, language)}
                  <br />
                  {t(certificateContent.result.notFoundLine2, language)}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
