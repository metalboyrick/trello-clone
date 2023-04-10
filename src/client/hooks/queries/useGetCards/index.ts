import useAxios from "@/client/hooks/common/useAxios";
import { GetCardsResponse } from "./useGetCards.types";
import { TCard, TUser } from "@/client/types/data";

function normalizeData(response: GetCardsResponse | undefined) {
  const normalizedResponse: TCard[] = [];

  if (response)
    for (const card of response) {
      const {
        id = 0,
        slot = "",
        headline = "",
        description = "",
        img = null,
        tags = [],
        users = [],
        commentCount = 0,
        likes = 0,
        shared = 0,
        order = 0,
      } = card;

      const normalizedUsers: TUser[] = [];

      for (const user of users) {
        const { id = 0, name = "", img = null } = user;
        normalizedUsers.push({ id, name, img });
      }

      normalizedResponse.push({
        id,
        slot,
        headline,
        description,
        img,
        tags,
        users: normalizedUsers,
        commentCount,
        likes,
        shared,
        order,
      });
    }

  return normalizedResponse;
}

function useGetCards() {
  const [{ data, loading, error }, refetch] =
    useAxios<GetCardsResponse>("/kanban");

  const getCards = async () => {
    await refetch();
  };

  return { data: normalizeData(data), loading, error, getCards };
}

export default useGetCards;
