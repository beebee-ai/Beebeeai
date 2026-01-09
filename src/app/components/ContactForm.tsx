import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import { useLanguage } from '../contexts/LanguageContext';
import { homeContent, t } from '../locales/homeContent';
import { toast } from 'sonner';

export function ContactForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    country: '',
    email: '',
    inquiry: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Send email with template parameters matching EmailJS template
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.studentName,
          from_name: formData.studentName,
          age: formData.studentAge || (language === 'ZH' ? '未填写' : 'Not provided'),
          country: formData.country,
          from_email: formData.email,
          source: 'BEEBEE.AI 官网 - 联系我们表单',
          message: formData.inquiry
        }
      );

      // Show success message
      toast.success(
        language === 'ZH' 
          ? '提交成功！我们会尽快与您联系。' 
          : 'Submitted successfully! We will contact you soon.'
      );

      // Reset form
      setFormData({
        studentName: '',
        studentAge: '',
        country: '',
        email: '',
        inquiry: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error(
        language === 'ZH' 
          ? '提交失败，请稍后重试或直接发送邮件至 ' + EMAILJS_CONFIG.TO_EMAIL
          : 'Submission failed. Please try again later or email us directly at ' + EMAILJS_CONFIG.TO_EMAIL
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      studentAge: '',
      country: '',
      email: '',
      inquiry: ''
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* 姓名和年龄 - 移动端两列，PC端改为全宽单独一行 */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {/* 同学姓名 */}
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
            {t(homeContent.contact.form.studentName, language)} <span style={{ color: 'var(--orange-primary)' }}>*</span>
          </label>
          <input
            type="text"
            required
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            className="w-full px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        
        {/* 同学年龄（选填）*/}
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
            {t(homeContent.contact.form.studentAge, language)}
          </label>
          <input
            type="text"
            value={formData.studentAge}
            onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
            className="w-full px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
      </div>
      
      {/* 国家和邮箱 - 移动端和PC端都是两列 */}
      <div className="grid grid-cols-2 gap-4">
        {/* 所在国家 */}
        <div>
          <label className="block mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
            {t(homeContent.contact.form.country, language)} <span style={{ color: 'var(--orange-primary)' }}>*</span>
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        
        {/* 电子邮件 */}
        <div>
          <label className="block mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
            {t(homeContent.contact.form.email, language)} <span style={{ color: 'var(--orange-primary)' }}>*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t(homeContent.contact.form.emailPlaceholder, language)}
            className="w-full px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
      </div>
      
      {/* 咨询说明 */}
      <div>
        <label className="block mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
          {t(homeContent.contact.form.inquiry, language)} <span style={{ color: 'var(--orange-primary)' }}>*</span>
        </label>
        <textarea
          required
          value={formData.inquiry}
          onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
          placeholder={t(homeContent.contact.form.inquiryPlaceholder, language)}
          rows={4}
          className="w-full px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
        ></textarea>
      </div>
      
      {/* 按钮组 */}
      <div className="grid grid-cols-2 gap-4 pt-2">
        <button
          type="button"
          onClick={handleReset}
          disabled={isSubmitting}
          className="px-6 py-3 rounded-lg transition-colors border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)'
          }}
          onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          {t(homeContent.contact.form.cancel, language)}
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--orange-primary)',
            color: '#ffffff',
            fontWeight: 600
          }}
          onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#ff8c42')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--orange-primary)')}
        >
          {isSubmitting 
            ? (language === 'ZH' ? '提交中...' : 'Submitting...') 
            : t(homeContent.contact.form.submit, language)
          }
        </button>
      </div>
    </form>
  );
}