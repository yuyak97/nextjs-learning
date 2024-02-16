import { GamingHistoryResponse } from "@/api/type/gaming-history.types"
import { formatDateString } from "@/utils/date.util"
import React from "react"

type Props = {
  gamingHistories: GamingHistoryResponse[]
}

const GamingHistoryTimeLine: React.FC<Props> = ({ gamingHistories }) => {
  return (
    <div>
      {gamingHistories.map(
        ({ publicId, title, description, startMonth, endMonth }) => {
          const formattedStartMonth = formatDateString(startMonth, "yyyy/MM")
          const formattedEndMonth = endMonth
            ? formatDateString(endMonth, "yyyy/MM")
            : null

          return (
            <div key={publicId}>
              <h2>{title}</h2>
              <time dateTime={formattedStartMonth}>{formattedStartMonth}</time>~
              {formattedEndMonth && (
                <time dateTime={formattedEndMonth}>{formattedEndMonth}</time>
              )}
              <p>{description}</p>
            </div>
          )
        },
      )}
    </div>
  )
}

export default GamingHistoryTimeLine
