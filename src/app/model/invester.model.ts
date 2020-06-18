export class Invester {
  investor_id: number;
  account_id: string;
  amc_code: string;
  unitholder_id: string;
  unitholder_type: string;
  fund_code: string;
  unit: number;
  thb: number;

  static deserialize(input: any): Invester {
    const invester = new Invester();
    Object.assign(invester, input);
    return invester;
  }
}
