//const {download_file} = require("js_tools");

const axios = require("axios");

module.exports.ResourceManagerController = class {
    constructor(url) {
        this.url = url;
        if (!this.url.startsWith('http://')) {
            this.url = "http://" + this.url;
        }
    }

    async get_all_host() {
        const resource_manager_url = this.url + "/resources/hosts/";
        try {
            var {data} = await axios.get(resource_manager_url)
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossibe de récupérer la liste des host"};
        }
    }

    async get_host(host_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name;
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "Le propriétaire n'existe pas: " + host_name};
        }
    }

    async insert_host(host) {
        const resource_manager_url = this.url + "/resources/hosts/";
        try {
            var {data} = await axios.post(resource_manager_url, {host})
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossible de créer un propriétaire"};
        }
    }

    async get_all_type(host_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/";
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossibe de récupérer la liste des types: " + host_name + "/"};
        }
    }

    async get_type(host_name, type_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name;
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "Le type n'existe pas: " + host_name + "/" + type_name};
        }
    }

    async insert_type(host_name, type) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/";
        try {
            var {data} = await axios.post(resource_manager_url, {type})
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossible de créer un type de resource"};
        }
    }
    async get_all_resource(host_name, type_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/"
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossibe de récupérer la liste des resources: " + host_name + "/" + type_name + "/"};
        }
    }

    async get_resource(host_name, type_name, resource_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "La ressource n'existe pas: " + host_name + "/" + type_name + "/" + resource_name};
        }
    }

    async insert_resource(host_name, type_name, resource) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/"
        try {
            var {data} = await axios.post(resource_manager_url, {resource})
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossible de créer une ressource"};
        }
    }

    async get_all_release(host_name, type_name, resource_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/"
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossibe de récupérer la liste des resources: " + host_name + "/" + type_name + "/" + resource_name + "/"};
        }
    }

    async get_release(host_name, type_name, resource_name, release_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/" + release_name
        try {
            var {data: resource_manager} = await axios.get(resource_manager_url)
            return resource_manager;
        } catch (e) {
            console.log(e.message)
            throw {message: "La release n'existe pas: " + host_name + "/" + type_name + "/" + resource_name + "/" + release_name};
        }
    }

    get_release_download_link(host_name, type_name, resource_name, release_name) {
        return this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/" + release_name + "/download"
    }

    /*async download_release(host_name, type_name, resource_name, release_name, out_path) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/" + release_name
        try {
            await download_file(resource_manager_url + "/download", out_path);
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossible de télécharger la release: " + host_name + "/" + type_name + "/" + resource_name + "/" + release_name};
        }
    }*/

    async import_release(host_name, type_name, resource_name, release_name) {
        const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/" + release_name
        try {
            var {data: release} = await axios.post(resource_manager_url)
            return release;
        } catch (e) {
            console.log(e.message)
            throw {message: "La release n'existe pas: " + host_name + "/" + type_name + "/" + resource_name + "/" + release_name};
        }
    }


}