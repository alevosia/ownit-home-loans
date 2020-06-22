import axios from 'axios'
import { CONTACT_API_URL } from '../constants/form'

export const sendEmail = async (
    name: string,
    email: string,
    message: string
): Promise<ContactAPIResponse> => {
    const response = await axios.post(CONTACT_API_URL, { name, email, message })
    return response.data as ContactAPIResponse
}
