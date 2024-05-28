export default (path: string) : any => {

  const router = useRouter()

  router.push(path);

  return 0;
}