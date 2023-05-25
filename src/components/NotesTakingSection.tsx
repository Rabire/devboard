import { useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

const NotesTakingSection = () => {
  const [text, setText] = useState("# hello *world*");
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);

  return (
    <section className="overflow-y-scroll p-0 relative flex-1">
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
          className="md px-5 overflow-scroll h-full"
          onClick={handleFocus}
          dangerouslySetInnerHTML={{ __html: md.render(text) }}
        ></div>
      )}
    </section>
  );
};

export default NotesTakingSection;
