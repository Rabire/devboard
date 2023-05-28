import generatePRs from "../utils/faker/pull-requests";
import getStatusTitle from "../utils/pull-request";
import { PRStatus } from "../utils/types";
import GhDraftIcon from "./svg/GhDraftIcon";
import GhPendingIcon from "./svg/GhPendingIcon";
import GhReadyIcon from "./svg/GhReadyIcon";
import GhRejectedIcon from "./svg/GhRejectedIcon";

type Props = { status: PRStatus };

const PRStatusList = ({ status }: Props) => {
  const relatedPRs =
    generatePRs().find((ctg) => ctg.status === status)?.pullRequests || [];

  return (
    <div className="flex gap-5 border-bottom py-2.5 mx-5">
      <div className="min-w-[25px]">
        {status === "ready" && <GhReadyIcon />}
        {status === "pending" && <GhPendingIcon />}
        {status === "rejected" && <GhRejectedIcon />}
        {status === "draft" && <GhDraftIcon />}
      </div>

      <div className="overflow-hidden">
        <p className="font-semibold">
          {relatedPRs.length} {getStatusTitle(status, relatedPRs.length)}
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
