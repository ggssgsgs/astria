//------------------------------------------------------------------------------
// <auto-generated>
//     這個程式碼是由範本產生。
//
//     對這個檔案進行手動變更可能導致您的應用程式產生未預期的行為。
//     如果重新產生程式碼，將會覆寫對這個檔案的手動變更。
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication1
{
    using System;
    using System.Collections.Generic;
    
    public partial class ReserveForm
    {
        public int pID { get; set; }
        public int mID { get; set; }
        public int rID { get; set; }
        public string ProName { get; set; }
        public string ProSkill { get; set; }
        public Nullable<int> ProCost { get; set; }
        public string ProAddress { get; set; }
        public string ReserveDate { get; set; }
    
        public virtual MemberForm MemberForm { get; set; }
        public virtual ProForm ProForm { get; set; }
    }
}
