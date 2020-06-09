package com.tvm.OnlineFishMart.OnlineFishMart.Model;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class Category  {

	@Id
    @GeneratedValue
    private Long id;
    private String categoryName;
    private String categoryDescription;
    private Integer imgid;

	  public Category(Long id, String categoryName, String categoryDescription, Integer imgid) {
		super();
		this.id = id;
		this.categoryName = categoryName;
		this.categoryDescription = categoryDescription;
		this.imgid = imgid;
	}
	  
	  
	public Integer getImgid() {
		return imgid;
	}


	public void setImgid(Integer imgid) {
		this.imgid = imgid;
	}


	public Long getId() {
	        return id;
	    }
	public String getCategoryName() {
		return categoryName;
	}



	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}



	public String getCategoryDescription() {
		return categoryDescription;
	}



	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}