import env,{env__assign,process$env$,throw__env$missing} from "ctx-core/env";
import "ctx-core/riot/env";
const QUOVO_ACCESS_TOKEN_KEY_PREFIX = env.QUOVO_ACCESS_TOKEN_KEY_PREFIX || process$env$("QUOVO_ACCESS_TOKEN_KEY_PREFIX") || "censible-core"
    , QUOVO_LOGIN = env.QUOVO_LOGIN || process$env$("QUOVO_LOGIN") || throw__env$missing("QUOVO_LOGIN")
    , QUOVO_PASSWORD = env.QUOVO_PASSWORD || process$env$("QUOVO_PASSWORD") || throw__env$missing("QUOVO_PASSWORD")
    , QUOVO_BROKERAGE_ID_DEMO = env.QUOVO_BROKERAGE_ID_DEMO || process$env$("QUOVO_BROKERAGE_ID_DEMO", "QUOVO_BROKERAGE_ID_TEST", "TEST_QUOVO_BROKERAGE_ID") || throw__env$missing("QUOVO_BROKERAGE_ID_DEMO")
    , QUOVO_BROKERAGE_USERNAME_DEMO = env.QUOVO_BROKERAGE_USERNAME_DEMO || process$env$("QUOVO_BROKERAGE_USERNAME_DEMO", "QUOVO_BROKERAGE_USERNAME_TEST", "TEST_QUOVO_BROKERAGE_USERNAME") || throw__env$missing("QUOVO_BROKERAGE_USERNAME_DEMO")
    , QUOVO_BROKERAGE_PASSWORD_DEMO = env.QUOVO_BROKERAGE_PASSWORD_DEMO || process$env$("QUOVO_BROKERAGE_PASSWORD_DEMO", "QUOVO_BROKERAGE_PASSWORD_TEST", "TEST_QUOVO_BROKERAGE_PASSWORD") || throw__env$missing("QUOVO_BROKERAGE_PASSWORD_DEMO")
    , QUOVO_USER_ID_DEMO = env.QUOVO_USER_ID_DEMO || process$env$("QUOVO_USER_ID_DEMO", "QUOVO_USER_ID_TEST", "TEST_QUOVO_USER_ID") || throw__env$missing("QUOVO_USER_ID_DEMO")
    , QUOVO_USERNAME_DEMO = env.QUOVO_USERNAME_DEMO || process$env$("QUOVO_USERNAME_DEMO", "QUOVO_USERNAME_TEST", "TEST_QUOVO_USERNAME") || throw__env$missing("QUOVO_USERNAME_DEMO")
    , QUOVO_ACCOUNT_ID_DEMO = env.QUOVO_ACCOUNT_ID_DEMO || process$env$("QUOVO_ACCOUNT_ID_DEMO", "QUOVO_ACCOUNT_ID_TEST", "TEST_QUOVO_ACCOUNT_ID") || throw__env$missing("QUOVO_ACCOUNT_ID_DEMO")
    , QUOVO_PORTFOLIO_ID_DEMO = env.QUOVO_PORTFOLIO_ID_DEMO || process$env$("QUOVO_PORTFOLIO_ID_DEMO", "QUOVO_PORTFOLIO_ID_TEST", "TEST_QUOVO_PORTFOLIO_ID") || throw__env$missing("QUOVO_PORTFOLIO_ID_DEMO");
env__assign({
  QUOVO_ACCESS_TOKEN_KEY_PREFIX: QUOVO_ACCESS_TOKEN_KEY_PREFIX,
  QUOVO_LOGIN: QUOVO_LOGIN,
  QUOVO_PASSWORD: QUOVO_PASSWORD,
  QUOVO_BROKERAGE_ID_DEMO: parseInt(QUOVO_BROKERAGE_ID_DEMO),
  QUOVO_BROKERAGE_USERNAME_DEMO: QUOVO_BROKERAGE_USERNAME_DEMO,
  QUOVO_BROKERAGE_PASSWORD_DEMO: QUOVO_BROKERAGE_PASSWORD_DEMO,
  QUOVO_USER_ID_DEMO: parseInt(QUOVO_USER_ID_DEMO),
  QUOVO_USERNAME_DEMO: QUOVO_USERNAME_DEMO,
  QUOVO_ACCOUNT_ID_DEMO: parseInt(QUOVO_ACCOUNT_ID_DEMO),
  QUOVO_PORTFOLIO_ID_DEMO: parseInt(QUOVO_PORTFOLIO_ID_DEMO)
});
export default env;
export function new__quovo$user__demo(ctx) {
  return {
    username: ctx.quovo$username,
    name: "Quovo Test2",
    email: "development@quovo.com",
    phone: ""
  };
}