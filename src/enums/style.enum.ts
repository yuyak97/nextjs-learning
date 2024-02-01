import { whiteText } from "@/const/style"

export enum ButtonColor {
  RED = `bg-red-600 hover:bg-red-800 ${whiteText}`,
  GREEN = `bg-green-500 hover:bg-green-800 ${whiteText}`,
  GRAY = `bg-gray-300 hover:bg-gray-400 text-black`,
  BLUE = `bg-blue-500 hover:bg-blue-700 ${whiteText}`,
}
