import { BASE_URL } from "@/shared/api";

export async function fetchBooks(searchValue: string) {
  const url = new URL(BASE_URL)
  url.searchParams.append("q", searchValue)
  url.searchParams.append("key", "AIzaSyBPwB8cB4mFSqjKa0HPKTErg8e2gUbyVnc")

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json()
    return data.items;
  } catch (error) {
    console.error(error)
    return null;
  }

}