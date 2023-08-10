# Class

## `Transporter`

Essa é a descrição do Transporter

### `constructor()`

## `Constants`

## `Crypto`

### `cryptPass(password: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| password | * | nullable: undefined |

### `createToken(user: *, timer: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| user | * | nullable: undefined |
| timer | * | nullable: undefined |

### `expirationToken(token: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| token | * | nullable: undefined |

### `checkPassWord(password: *, userPassword: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| password | * | nullable: undefined |
| userPassword | * | nullable: undefined |

### `logoutToken(idUser: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| idUser | * | nullable: undefined |

## `GetDate`

### `getDate(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `GeneratePass`

### `generatePass(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Transporter`

### `transporterForgotPass(userEmail: string, password: string, res: string)`

this is constructor description.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| userEmail | string |  | this is arg1 description. |
| password | string |  | this is arg2 description. |
| res | string |  | this is arg2 description. |

# Function

## `forgotPassController(req: string, res: string): *`

Essa função pe feita para que o user consiga receber um email para efetuar a troca de senha

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | string |  |
| res | string |  |

## `getBlackList(req: *, res: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `loginController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `logout(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `getExempleController(req: *, res: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `CreateCharge(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `listChargesController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `getPaymentStatus(req: *, res: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `createCnpjController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `createUserController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `deleteUserController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `getByIdController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `getCnpjController(req: *, res: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `getUserController(req: *, res: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |

## `connectionDB()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `verifyToken(req: *, res: *, next: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | * | nullable: undefined |
| res | * | nullable: undefined |
| next | * | nullable: undefined |

## `sendConfirmEmail(userId: *, password: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| userId | * | nullable: undefined |
| password | * | nullable: undefined |

## `ticketPdf(userId: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| userId | * | nullable: undefined |

## `qrCodeController(id: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | * | nullable: undefined |

## `templateEmailConfirm(userName: *, userPass: *): string`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| userName | * | nullable: undefined |
| userPass | * | nullable: undefined |