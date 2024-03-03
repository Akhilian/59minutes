# Loki and grafana

Dans cette première session, on déploie un seul service (`flight-service`) et on le configure pour qu'il envoie ses logs
à Loki. On déploie ensuite Grafana pour visualiser les logs.

La partie infrastructure est gérée par deux docker-compose, un pour Loki et Grafana.
Un autre docker-compose est utilisé pour déployer le service `flight-service`.

## Remarques

Dans cette version, l'application envoie ses logs à Loki. Ça demande une instrumentation minimale de l'application, et
donc le code a été modifié pour ajouter un logger. C'est une modification mineure, mais ça peut être évité en utilisant
un mecanisme de sidecar ou exploitant les logs qui sortent sur `stdout`.

## Commandes

### Loki et Grafana

```bash
docker-compose -f docker-compose-telemetry.yml up
```

### Flight-service

```bash
docker-compose -f docker-compose.yml up
```
