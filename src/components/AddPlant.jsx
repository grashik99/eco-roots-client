import { use } from "react"
import { AuthContext } from "../provider/AuthProvider"

const AddPlant = () => {
    const data = use(AuthContext);
  return (
    <div>AddPlant{data.name}</div>
  )
}
export default AddPlant