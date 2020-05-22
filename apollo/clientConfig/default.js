
export default function (context) {
    return {
        httpEndpoint: `http://looberg/api?&token=${context.query.token}`
    }
}