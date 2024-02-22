import { GamingHistoryResponse } from "@/api/type/gaming-history.types"
import { formatDateString } from "@/utils/date.util"
import Image from "next/image"
import React from "react"

type Props = {
  gamingHistories: GamingHistoryResponse[]
}

const GamingHistoryTimeLine: React.FC<Props> = ({ gamingHistories }) => {
  return (
    <div>
      {gamingHistories.map(
        ({ publicId, title, description, startMonth, endMonth, image }) => {
          const formattedStartMonth = formatDateString(startMonth, "yyyy/MM")
          const formattedEndMonth = endMonth
            ? formatDateString(endMonth, "yyyy/MM")
            : null

          return (
            <div
              key={publicId}
              className="flex flex-col space-y-4 rounded-lg p-4 md:flex-row md:items-center md:space-x-6 md:space-y-0"
            >
              {image && (
                <Image
                  width={120}
                  height={120}
                  src={image}
                  alt={title}
                  className="rounded-full object-cover"
                />
              )}
              <div className="flex flex-col space-y-2 text-wrap">
                <h2 className="break-words text-lg font-bold text-gray-800 dark:text-gray-200">
                  {title}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={formattedStartMonth}>
                    {formattedStartMonth}
                  </time>
                  ~
                  {formattedEndMonth && (
                    <time dateTime={formattedEndMonth}>
                      {formattedEndMonth}
                    </time>
                  )}
                </div>
                <p
                  className="break-words text-gray-600 dark:text-gray-300"
                  style={{
                    overflowWrap: "break-word",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  asdjadsajdjakljdskaljdksaljdklsajdksaljdksaldjlakjdkaljdklajdkaljdakldasjhdhaskhdsajkhdajkhdjkahdjksahdjakhdjakhdjskahdajkk
                  {/* {description} */}
                </p>
              </div>
            </div>
          )
        },
      )}
    </div>
  )
}

export default GamingHistoryTimeLine
