export function imageFormatter(url: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}/${url.replace(/^\.\//, "")}`;
}
