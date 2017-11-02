package com.revature.dao;

import java.math.BigDecimal;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import com.revature.utils.HibernateUtil;


public class AssociateDaoHibernate {
	@SuppressWarnings("rawtypes")
	public BigDecimal getNoOfAssociates(BigDecimal associate_batch_id) {
		// count on the batchid based on the batchid condition

		String count_batches = "select count(TfAssociate.tfAssociateId) from com.revature.entity where entity.tfBatchId=:associatebatch_id group by entity.tfAssociateId ";
		SessionFactory conn = HibernateUtil.getSession();
		Session obj=conn.getCurrentSession();
		Query query =obj.createQuery(count_batches);
		query.setParameter("associatebatch_id", associate_batch_id);
		BigDecimal associate_count =  (BigDecimal) query.list().get(0);
		//conn.close();
		return associate_count;
		
	}
}
