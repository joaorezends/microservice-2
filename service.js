const axios = require('axios')

module.exports = async function () {
  const { data: { access_token: accessToken } } = await axios.post(
    'http://keycloak.default.svc.cluster.local:8080/realms/myrealm/protocol/openid-connect/token',
    {
      grant_type: 'client_credentials',
      client_id: 'microservice-2',
      client_secret: 'XfN88yEihjrqIiAqUo1Qk3NVwNdt5Frz',
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  const { data } = await axios.get(
    'http://microservice-1.mynamespace.svc.cluster.local',
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
    }
  )

  return data
}
