import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store'

const find = async (key: string) => {
  try {
    const res = await getItemAsync(key)
    return res ? JSON.parse(res) : null
  } catch (error) {
    console.log(error)
    return null
  }
}

const create = async <T>(key: string, prop: T) => {
  try {
    const stringfiedVal = JSON.stringify(prop)
    await setItemAsync(key, stringfiedVal)
    return prop
  } catch (error) {
    console.log(error)
  }
}

const remove = async (key: string) => {
  try {
    await deleteItemAsync(key)
  } catch (error) {
    console.log(error)
  }
}

export default {
  find,
  create,
  remove,
}