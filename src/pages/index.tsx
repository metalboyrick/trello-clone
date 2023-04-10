import { resetServerContext } from "react-beautiful-dnd";

import AppPage from "@/client/components/AppPage";

export default function Home() {
  return <AppPage />;
}

export async function getServerSideProps() {
  resetServerContext();
  return {
    props: {},
  };
}
