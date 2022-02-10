import { useRouter } from 'next/router'

function Gener8(props) {
 const router = useRouter();

 const refreshData = () => {
  router.replace(router.asPath);
 }
 //refreshes props by forcing an invisible client-side redirect to the same page we're already on
}

function Gener8({ theData }) {
 const [isRefreshing, setIsRefreshing] = React.useState(false);
 const refreshData = () => {
   router.replace(router.asPath);
   setIsRefreshing(true);
 };
 React.useEffect(() => {
   setIsRefreshing(false);
 }, [theData]);
}

function Gener8({ initialData }) {
 const [theData, setTheData] = React.useState(initialData);
 // Mutate whenever you want with `setTheData`!
}