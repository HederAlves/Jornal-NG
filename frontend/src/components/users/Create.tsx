//import { client } from '../lib/apollo';
import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { CREATE_USER } from "../../graphql/mutation/User";
import { GET_USERS } from "../../graphql/queries/Users";

interface IProps { id: string, name: string }

const Create = (props: IProps) => {
    var { id, name } = props
    var [name, setName] = useState('');
    const [createUser] = useMutation(CREATE_USER);

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault();

        if (!name) {
            return false;
        }

        await createUser({
            variables: {
                createUser: name, id
            },
            refetchQueries: [GET_USERS]
            //Código acima busca do backend 
            //Código abaixo pelo cache
            /*update: (cache, { data: { createUser } }) => {
                const { users } = client.readQuery({ query: GET_USERS })
                cache.writeQuery({
                   query: GET_USERS,
                   data: {
                       users: [
                           ...users,
                           createUser,
                ]}})} */
        })
    }

    return (
        <form onSubmit={handleCreateUser}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default Create;