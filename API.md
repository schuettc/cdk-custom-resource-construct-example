# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResourceExample <a name="CustomResourceExample" id="cdk-custom-resource-construct-example.CustomResourceExample"></a>

#### Initializers <a name="Initializers" id="cdk-custom-resource-construct-example.CustomResourceExample.Initializer"></a>

```typescript
import { CustomResourceExample } from 'cdk-custom-resource-construct-example'

new CustomResourceExample(scope: Construct, id: string, props: CdkCustomResourceExampleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps">CdkCustomResourceExampleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-custom-resource-construct-example.CustomResourceExample.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-custom-resource-construct-example.CustomResourceExample.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-custom-resource-construct-example.CustomResourceExample.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps">CdkCustomResourceExampleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-custom-resource-construct-example.CustomResourceExample.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-custom-resource-construct-example.CustomResourceExample.isConstruct"></a>

```typescript
import { CustomResourceExample } from 'cdk-custom-resource-construct-example'

CustomResourceExample.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-custom-resource-construct-example.CustomResourceExample.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-custom-resource-construct-example.CustomResourceExample.property.customResourceResult">customResourceResult</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-custom-resource-construct-example.CustomResourceExample.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResourceResult`<sup>Required</sup> <a name="customResourceResult" id="cdk-custom-resource-construct-example.CustomResourceExample.property.customResourceResult"></a>

```typescript
public readonly customResourceResult: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### CdkCustomResourceExampleProps <a name="CdkCustomResourceExampleProps" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps"></a>

#### Initializer <a name="Initializer" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.Initializer"></a>

```typescript
import { CdkCustomResourceExampleProps } from 'cdk-custom-resource-construct-example'

const cdkCustomResourceExampleProps: CdkCustomResourceExampleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.customResourceNumber">customResourceNumber</a></code> | <code>number</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `customResourceNumber`<sup>Required</sup> <a name="customResourceNumber" id="cdk-custom-resource-construct-example.CdkCustomResourceExampleProps.property.customResourceNumber"></a>

```typescript
public readonly customResourceNumber: number;
```

- *Type:* number

---



