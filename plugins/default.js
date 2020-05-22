export default function ({query}) {
    return {
        httpEndpoint: `http://looberg/api?&token=${query.token}`
    }
}