<template>
 <div>
    <v-card >
	    <v-card-title class="justify-center">
	        <span class="headline">Sign Up</span>
	    </v-card-title>
	    <v-card-text>
	        <v-text-field label="E-mail" type="email" required >
	        </v-text-field>
	    </v-card-text>
	    <v-card-text>
	        <v-text-field label="Usuario" required></v-text-field> 
	    </v-card-text>
	    <v-card-text>
	        <v-text-field type="password" label="Password"></v-text-field>
	    </v-card-text>
	    <v-card-text>
	        <v-text-field type="password" label="Confirm Password"></v-text-field>
	    </v-card-text>
	    <v-card-actions class="justify-center pb-6">
	        <v-btn>Register</v-btn>
            <v-btn @click="close">Close </v-btn>
	    </v-card-actions>
    </v-card>
</div> 
</template>

<script>
export default {
	methods:{
		close(){
			this.$emit("close")
		}
	}

}
</script>

<style>

</style>