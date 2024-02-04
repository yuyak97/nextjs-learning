export const getUsername = ({
  originalName,
  displayName,
}: {
  originalName: string
  displayName?: string
}) => displayName || originalName
