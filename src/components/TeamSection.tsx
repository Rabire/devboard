import { membersSprints, teams } from "../utils/teams";
import AvatarGroup from "./AvatarGroup";

const TeamSection = () => (
  <section>
    <h2>Équipes</h2>
    <div className="space-y-2.5 mt-2.5 mb-5">
      {teams.map((team) => (
        <div key={team.name} className="flex gap-5 items-center font-semibold">
          <AvatarGroup persons={team.members} />
          {team.name}
        </div>
      ))}
    </div>

    <h2 className="mt-2.5">Travailent sur</h2>
    <div className="space-y-2.5 mt-2.5">
      {membersSprints.map((sprint) => (
        <div key={sprint.sprint.name} className="flex gap-5 items-center">
          <AvatarGroup persons={sprint.members} />
          <div className=" overflow-hidden">
            <p className="truncate">{sprint.sprint.name}</p>
            <p className="text-xs opacity-50">Issue #{sprint.sprint.issue}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
