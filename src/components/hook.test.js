import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from "../hooks/useForm"


const setup = (params) => renderHook(() => useForm(params))


test('should change keyword', () => {
	const { result } = setup()

	act(() => {
		result.current.updateKeyword("superwoman")
	})

	expect(result.current.keyword).toBe("superwoman")
})


test('should use initial values', () => {
	const { result } = setup({ initialKeyword: "oprah" })

	expect(result.current.keyword).toBe("oprah")
})


test('should use initial rating', () => {
	const { result } = setup({ initialRating: "pg" })

	expect(result.current.rating).toBe("pg")
})


