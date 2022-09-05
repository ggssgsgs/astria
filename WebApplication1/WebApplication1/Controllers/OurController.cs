using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class OurController : ApiController
    {
        // GET: api/Our
        OurAstroEntities db = new OurAstroEntities();
        public IEnumerable<MemberForm> Get()
        {
            var datas = from m in db.MemberForm
                        select m;
            return datas;
        }

        public IEnumerable<MemberForm> Post(int id)
        {
            var datas = from m in db.MemberForm
                        where m.MemberID == id
                        select m;
            return datas;
        }

        // GET: api/Our/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Our
        public int Post(string ID,string Name, bool Sex, string Birth, string BirthTime, string BirthPlace, string Phone, string Mail, string Account)
        {
            int num = 0;
            try
            {
                MemberForm M = new MemberForm();
                M.MemberID = Convert.ToInt32(ID);
                M.MemberName = Name;
                M.MemberSex = Sex;
                M.MemberBirth = Birth;
                M.MemberBirthTime = BirthTime;
                M.MemberBirthPlace = BirthPlace;
                M.MemberPhone = Phone;
                M.MemberEmail = Mail;
                M.MemberAccount = Account;
            }
            catch(Exception ex)
            {
                num = 0;
            }
            return num;
        }

        //// PUT: api/Our/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Our/5
        //public void Delete(int id)
        //{
        //}
    }
}
