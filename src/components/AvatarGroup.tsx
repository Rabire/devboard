import { Person } from "../utils/types";

type Props = { persons: Person[] };

// TODO: add hover effect to show member infos
// TODO: add shine effect while loading
const AvatarGroup = ({ persons }: Props) => (
  <div className="flex">
    {persons.map((person) => (
      <img
        key={person.id}
        className="rounded-full w-8 min-w-8 h-8 border-white border-2 -ml-2.5 first:ml-0 bg"
        src={person.image}
        alt={person.name}
      />
    ))}
  </div>
);

export default AvatarGroup;
