# cloud-run-functions-gen2-test
Cloud Run Functions GEN2をテストするためのリポジトリ

## Testing

ab -n 10000 -c 100 https://[your_deployment].cloudfunctions.net/helloWorld

## YAML

下記加えたYAMLの変更、意図としてはCPUをターゲットにして、3%以上ならスケールとしたい
refs: https://www.alibabacloud.com/help/ja/ack/serverless-kubernetes/user-guide/enable-auto-scaling-to-withstand-traffic-fluctuations

```
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/class: hpa.autoscaling.knative.dev
        autoscaling.knative.dev/metric: cpu
        autoscaling.knative.dev/target: '3'
```

## RESULT

コールドスタート引くが設定通りにスケールはするように見える
![結果](image.png?raw=true)
