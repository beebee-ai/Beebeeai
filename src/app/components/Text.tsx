import { Fragment } from 'react';

/**
 * 把文案里的「|」变成可换行点（<wbr>）。
 * 配合全局 `word-break: keep-all`，中文标题只会在空格、标点和「|」处换行，
 * 不会把「企业」「专家」这类词拆到两行；需要粘住的空格请在文案里用 U+00A0。
 */
export function Seg({ text }: { text: string }) {
  const parts = text.split('|');
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <wbr />}
        </Fragment>
      ))}
    </>
  );
}
