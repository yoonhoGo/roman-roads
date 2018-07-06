import * as AWS from 'aws-sdk'

export default class Lambda {
  private lambda: AWS.Lambda

  constructor(public functionName: string, options?: AWS.Lambda.ClientConfiguration) {
    this.lambda = new AWS.Lambda(options)
  }

  invoke(context: any) {
    const params: AWS.Lambda.InvocationRequest = {
      FunctionName: this.functionName,
      Payload: new Buffer(JSON.stringify(context))
    }
    return this.lambda.invoke(params).promise()
  }
}