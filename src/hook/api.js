const baseURL = import.meta.env.VITE_BASE_URL

export async function getCustomDomains() {
    return await fetch(`${baseURL}/custom_domains`).catch(e => console.error(e))
}

export async function getCustomDomain(customDomain) {
    return await fetch(`${baseURL}/custom_domain/${customDomain}`).catch(e => console.error(e))
}

export async function removeCustomDomain(customDomain) {
    return await fetch(`${baseURL}/custom_domain/${customDomain}`, {method: "DELETE"}).catch(e => console.error(e))
}

export async function setCustomDomain(customDomain) {
    const formData = new FormData()
    formData.append('domain_name', customDomain)
    return await fetch(`${baseURL}/custom_domain`, {method: "POST", body: formData}).catch(e => console.error(e))
}
