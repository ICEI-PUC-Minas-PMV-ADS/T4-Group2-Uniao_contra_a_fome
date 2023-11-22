async function fetchCompanies() {
  const response = fetch('https://fakerapi.it/api/v1/companies?_quantity=15')
    .then((data) => data.json())
    .catch((error) => console.error(error))

  return response
}
