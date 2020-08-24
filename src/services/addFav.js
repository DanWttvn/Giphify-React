const ENDPOINT = "http://localhost:8000"

export default function addFav({id, token}) {
	return fetch(`${ENDPOINT}/favs/${id}`, {
		method: "POST",
		headers: {
			"Context-Type": "application/json",
		},
		body: JSON.stringify({token})
	}).then(res =>{
		if(!res.ok) throw new Error("Response is NOT ok")
		return res.json()
	}).then(res => {
		const { favs } = res
		return favs
	})
}