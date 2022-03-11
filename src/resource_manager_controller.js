import {download_file} from "js_tools";

const axios = require("axios");

export default class {
    constructor(url, port) {
        this.url = "http://" + url + ":" + port;

        async function get_host(host_name) {
            const resource_manager_url = this.url + "/resources/hosts/" + host_name;
            try {
                var {data: resource_manager} = await axios.get(resource_manager_url)
                return resource_manager;
            } catch (e) {
                console.log(e.message)
                throw {message: "Le propriétaire n'existe pas: " + host_name};
            }
        }

        async function get_type(host_name, type_name) {
            const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name;
            try {
                var {data: resource_manager} = await axios.get(resource_manager_url)
                return resource_manager;
            } catch (e) {
                console.log(e.message)
                throw {message: "Le type n'existe pas: " + host_name + "/" + type_name};
            }
        }

        async function get_resource(host_name, type_name, resource_name) {
            const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name
            try {
                var {data: resource_manager} = await axios.get(resource_manager_url)
                return resource_manager;
            } catch (e) {
                console.log(e.message)
                throw {message: "La ressource n'existe pas: " + host_name + "/" + type_name + "/" + resource_name};
            }
        }

        async function get_release(host_name, type_name, resource_name, release_name) {
            const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/" + release_name
            try {
                var {data: resource_manager} = await axios.get(resource_manager_url)
                return resource_manager;
            } catch (e) {
                console.log(e.message)
                throw {message: "La release n'existe pas: " + host_name + "/" + type_name + "/" + resource_name + "/" + release_name};
            }
        }

        async function download_release(host_name, type_name, resource_name, release_name, out_path) {
            const resource_manager_url = this.url + "/resources/hosts/" + host_name + "/types/" + type_name + "/resources/" + resource_name + "/releases/" + release_name
            try {
                await download_file(resource_manager_url + "/download", out_path);
            } catch (e) {
                console.log(e.message)
                throw {message: "Impossible de télécharger la release: " + host_name + "/" + type_name + "/" + resource_name + "/" + release_name};
            }
        }
    }
}