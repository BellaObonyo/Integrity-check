export default function authHeader() {
  const obj = JSON.parse(localStorage.getItem("sessionToken"))

  if (obj && obj.accessToken) {
    return { Authorization: obj.accessToken }
  } else {
    return {}
  }
}
