export interface Form
{
  ipType?: string;
  name: string;
  label: string;
  value: string;
  style: any;
}

export const newItem = (a:any, b:any, c:any, e:any, f:any) => {
	return {

			ipType: a,
		  name: b,
		  label: c,
		  value: e,
		  style: f
	};
};
