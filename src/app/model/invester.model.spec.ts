import { Invester } from './invester.model';


describe('Invester', () => {
  describe('deserialize', () => {
    it('should return new invester with invester_id = 1 when have json response with invester_id = 1', () => {
      const investerJson = createInvesterJson(1);

      const client = Invester.deserialize(investerJson);

      expect(client).toEqual(createInvesterInstance(1));
    });
  });
});

function createInvesterInstance(no: number) {
  const investerJson = createInvesterJson(no);
  const invester = new Invester();
  invester.investor_id = investerJson.investor_id;
  invester.account_id = investerJson.account_id;
  invester.amc_code = investerJson.amc_code;
  invester.unitholder_id = investerJson.unitholder_id;
  invester.unitholder_type = investerJson.unitholder_type;
  invester.fund_code = investerJson.fund_code;
  invester.unit = investerJson.unit;
  invester.thb = investerJson.thb;

  return invester;
}

function createInvesterJson(no: number) {
  const invester = {
    investor_id: no,
    account_id: 'MOCK_ACCOUNT' + no,
    amc_code: 'MOCK_AMC_CODE' + no,
    unitholder_id: 'MOCK_UNITHOLDER_ID' + no,
    unitholder_type: 'MOCK_UNITHOLDER_TYPE' + no,
    fund_code: 'MOCK_FUND_CODE' + no,
    unit: no,
    thb: no
  };
  return invester;
}
