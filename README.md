# blueflood-grafana

Source code of the blueflood-grafana plugin to use [Blueflood](https://github.com/rackerlabs/blueflood) or 
Rackspace-metrics as a datasouce with [grafana](http://grafana.org/). This plugin works with Grafana 3.x


## Pre-requisites

* Running blueflood or Rackspace-metrics

* This plugin requires graphite-api with blueflood finder as a service. You can setup this by running the 
[rackerlabs/graphite-api-blueflood-finder](https://hub.docker.com/r/rackerlabs/graphite-api-blueflood-finder/) docker image as container.   

```sh
# graphite-api with blueflood finder
    docker run \
        -d -p 8888:8888 \
        -e GRAFANA_URLS=http://localhost:3000,http://192.168.1.200:3000 \
        -e BLUEFLOOD_QUERY_URL=http://localhost:20000\
        -e TENANT_ID=123 \
        rackerlabs/graphite-api-blueflood-finder
```  

* A grafana 3.x installation 

## Installation

### Install by using grafana-cli

```sh
grafana-cli plugins install rackerlabs-blueflood-datasource
```


### Installing compiled plugin
To install the compiled plugin, use the compiled code in the [blueflood-grafana-plugin](https://github.com/rackerlabs/blueflood-grafana-plugin) repository.  

1. Install the plugin by copying it to /var/lib/grafana/plugins. Grafana plugins are usually located at /var/lib/grafana/plugins 
but Grafana also provides a way to configure the path of plugins location.

    ```sh
    cd /var/lib/grafana/plugins
    git clone https://github.com/rackerlabs/blueflood-grafana-plugin.git
    ```

2. Restart grafana


### Steps to build plugin from source code

```
cd blueflood-grafana
npm install
npm install -g grunt-cli
grunt
```

The built plugin is available in `./dist` directory. Copy `./dist` to grafana plugins direcory and restart grafana. 
 
```
cp -r ./dist /var/lib/grafana/plugins
```

##Configure Grafana

Follow the [instructions](https://github.com/rackerlabs/blueflood-grafana/wiki/Getting-started) to configure 
blueflood or Rackspace-metrics as datasource.

## Blueflood datasource

[Blueflood](https://github.com/rackerlabs/blueflood) is an open source multi-tenant, distributed metric processing 
system. This plugin allows you to visualize metrics stored in blueflood via grafana. 

## Rackspace-metrics datasource

Rackspace-metrics is a SaaS offering for storing metrics. This plugin allows you to visualize metrics stored in 
Rackspace-metrics via grafana.   
