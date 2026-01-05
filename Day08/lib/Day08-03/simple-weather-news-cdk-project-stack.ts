import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import { Construct } from 'constructs';

export class SimpleWeatherNewsCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda関数1: 全天気データ取得（閲覧者用）
    /* No6 セクション19
    const getAllWeatherPublicFunction = new lambda.Function(this, 'GetAllWeatherPublicFunction', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'index.lambda_handler',
      code: lambda.Code.fromAsset('lambda/get_all_weather_public'),
      functionName: '"yourname"-get-all-weather-public-function'
    });
    */

    // Lambda関数2: 特定都市の天気データ取得（閲覧者用）
    /* No6 セクション20
    const getCityWeatherPublicFunction = new lambda.Function(this, 'GetCityWeatherPublicFunction', {
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: 'index.lambda_handler',
      code: , //TODO(No6 セクション20)
      functionName: '' //TODO(No6 セクション20)
    });
    */

    // DynamoDB読み取り権限をLambda関数に付与
    /* No6 セクション19
    const dynamoDbPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'dynamodb:Scan',
        'dynamodb:GetItem'
      ],
      resources: [
        'arn:aws:dynamodb:*:*:table/"yourname"-simple-weather-news-table'
      ]
    });
    */

    //getAllWeatherPublicFunction.addToRolePolicy(dynamoDbPolicy); //No6 セクション19
    //TODO(No6 セクション20)

    // HTTP API の追加
    /* No8 セクション23
    const httpApi = new apigatewayv2.HttpApi(this, 'WeatherPublicHttpApi', {
      apiName: '"yourname"-simple-weather-news-api-public',
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [apigatewayv2.CorsHttpMethod.GET],
        allowHeaders: ['*'],
      },
    });
    */

    // GET /all エンドポイント
    /* No8 セクション23
    const getAllIntegration = new integrations.HttpLambdaIntegration('GetAllWeatherIntegration', getAllWeatherPublicFunction);
    httpApi.addRoutes({
      path: '/all',
      methods: [apigatewayv2.HttpMethod.GET],
      integration: getAllIntegration,
    });
    */

    // GET /{cityId} エンドポイント
    /* No8 セクション23
    const getCityIntegration = new integrations.HttpLambdaIntegration('GetCityWeatherIntegration', ); //TODO(No8 セクション23)
    httpApi.addRoutes({
      path: '', //TODO(No8 セクション23)
      methods: [apigatewayv2.HttpMethod.GET],
      integration: , //TODO(No8 セクション23)
    });
    */
  }
}
