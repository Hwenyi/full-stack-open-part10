import { useApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const ApolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { credentials }});
    ApolloClient.resetStore();
    return data;
  }
  return [signIn, result];
}

export default useSignIn;