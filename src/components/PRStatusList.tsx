import PRs from "../utils/faker/pull-requests";
import getStatusTitle from "../utils/pull-request";
import PRStatus from "../utils/enums";
import GhDraftIcon from "./svg/GhDraftIcon";
import GhPendingIcon from "./svg/GhPendingIcon";
import GhReadyIcon from "./svg/GhReadyIcon";
import GhRejectedIcon from "./svg/GhRejectedIcon";

type Props = { status: PRStatus };

const PRStatusList = ({ status }: Props) => {
  const relatedPRs =
    PRs().find((ctg) => ctg.status === status)?.pullRequests || [];

  return (
    <div className="flex gap-5 border-bottom py-2.5 mx-5">
      <div className="min-w-[25px]">
        {status === PRStatus.Ready && <GhReadyIcon />}
        {status === PRStatus.Pending && <GhPendingIcon />}
        {status === PRStatus.Rejected && <GhRejectedIcon />}
        {status === PRStatus.Draft && <GhDraftIcon />}
      </div>

      <div className="overflow-hidden">
        <p className="font-semibold">
          {relatedPRs.length} {getStatusTitle(status)}
        </p>
        <ul className="list-disc list-inside">
          {relatedPRs.map((pr, index) => (
            <li className="truncate" key={index}>
              {pr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PRStatusList;
