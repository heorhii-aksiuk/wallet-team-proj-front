import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const success = () => toast.success('Success!')
const error = () => toast.error('Error!')

export { success, error };