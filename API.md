# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### CustomResourceExample <a name="cdk-custom-resource-construct-example.CustomResourceExample" id="cdkcustomresourceconstructexamplecustomresourceexample"></a>

#### Initializers <a name="cdk-custom-resource-construct-example.CustomResourceExample.Initializer" id="cdkcustomresourceconstructexamplecustomresourceexampleinitializer"></a>

```typescript
import { CustomResourceExample } from 'cdk-custom-resource-construct-example'

new CustomResourceExample(scope: Construct, id: string, props: CdkCustomResourceExampleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkcustomresourceconstructexamplecustomresourceexampleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkcustomresourceconstructexamplecustomresourceexampleparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkcustomresourceconstructexamplecustomresourceexampleparameterprops)<span title="Required">*</span> | [`cdk-custom-resource-construct-example.CdkCustomResourceExampleProps`](#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-custom-resource-construct-example.CustomResourceExample.parameter.scope" id="cdkcustomresourceconstructexamplecustomresourceexampleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-custom-resource-construct-example.CustomResourceExample.parameter.id" id="cdkcustomresourceconstructexamplecustomresourceexampleparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-custom-resource-construct-example.CustomResourceExample.parameter.props" id="cdkcustomresourceconstructexamplecustomresourceexampleparameterprops"></a>

- *Type:* [`cdk-custom-resource-construct-example.CdkCustomResourceExampleProps`](#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`customResourceResult`](#cdkcustomresourceconstructexamplecustomresourceexamplepropertycustomresourceresult)<span title="Required">*</span> | `string` | *No description.* |

---

##### `customResourceResult`<sup>Required</sup> <a name="cdk-custom-resource-construct-example.CustomResourceExample.property.customResourceResult" id="cdkcustomresourceconstructexamplecustomresourceexamplepropertycustomresourceresult"></a>

```typescript
public readonly customResourceResult: string;
```

- *Type:* `string`

---


## Structs <a name="Structs" id="structs"></a>

### CdkCustomResourceExampleProps <a name="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps" id="cdkcustomresourceconstructexamplecdkcustomresourceexampleprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CdkCustomResourceExampleProps } from 'cdk-custom-resource-construct-example'

const cdkCustomResourceExampleProps: CdkCustomResourceExampleProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`account`](#cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyaccount) | `string` | The AWS account ID this resource belongs to. |
| [`environmentFromArn`](#cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyenvironmentfromarn) | `string` | ARN to deduce region and account from. |
| [`physicalName`](#cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyphysicalname) | `string` | The value passed in by users to the physical name prop of the resource. |
| [`region`](#cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyregion) | `string` | The AWS region this resource belongs to. |
| [`customResourceNumber`](#cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertycustomresourcenumber)<span title="Required">*</span> | `number` | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.account" id="cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.environmentFromArn" id="cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyenvironmentfromarn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* `string`
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources.  Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.physicalName" id="cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyphysicalname"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* `string`
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by   CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated   by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.region" id="cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `customResourceNumber`<sup>Required</sup> <a name="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.customResourceNumber" id="cdkcustomresourceconstructexamplecdkcustomresourceexamplepropspropertycustomresourcenumber"></a>

```typescript
public readonly customResourceNumber: number;
```

- *Type:* `number`

---



