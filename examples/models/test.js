import { RCModel, Check, CheckType } from "../../src";

export default class TestModel extends RCModel {
  @Check(CheckType.String)
  id = '';

  @Check(CheckType.String)
  name = '';

  @Check(CheckType.Number)
  gender = 1;
}
