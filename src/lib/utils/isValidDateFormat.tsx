import { VALID_DATE_FORMAT_REGEX } from "../constants/constants"

export const isValidDateFormat = (input: string): boolean => {
    const isValid = VALID_DATE_FORMAT_REGEX.test(input)
    return isValid
}