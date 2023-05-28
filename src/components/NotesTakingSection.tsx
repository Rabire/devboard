import { useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

const DEFAULT_NOTES =
  "# API Keys\n- Spotify `wtcs7Vgi3I`\n- Stripe Token `xAS0CbMZPj`\n- Discord bot `OYsjhcz4Td`\n\n---\n\n`06 99 88 99 55` Géraldine LEBRETON\n> Je recherche un développeur React native pour commencer le mois prochain\n\n---\n\n*100vw - 1440 - (20x2)*";

const NotesTakingSection = () => {
  const [text, setText] = useState(DEFAULT_NOTES);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);

  return (
    <section className="overflow-y-scroll p-0 relative flex-1 flex flex-col">
      <h2 className="p-5 sticky top-0 bg-secondary">Notes rapides</h2>

      {focused ? (
        <textarea
          className="w-full px-5 pb-5 bg-transparent resize-none h-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={handleFocus}
          autoFocus
          onBlur={() => setFocused(false)}
        />
      ) : (
        <div
          className="markdown px-5 overflow-scroll flex-1 cursor-text"
          onClick={handleFocus}
          dangerouslySetInnerHTML={{ __html: md.render(text) }}
        ></div>
      )}
    </section>
  );
};

export default NotesTakingSection;
