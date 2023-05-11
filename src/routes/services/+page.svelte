<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<table class="pure-table pure-table-striped">
    <thead>
    <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Title</th>
        <th>Payed until</th>
        <th>Price</th>
        <th>Info</th>
        <th>Actions</th>
        <th>More</th>
    </tr>
    </thead>
    <tbody>
    {#each data.services as serivce}
        <tr>
            <td>
                {#if (serivce.paid)}
                    Payed
                {:else if serivce.bill}
                    Sent bill
                {:else}
                    Unpayed
                {/if}
            </td>
            <td>
                {serivce.plan_id}
            </td>
            <td>
                {serivce.name}
            </td>
            <td>
                {serivce.expire}
            </td>
            <td>
                {serivce.plan_id}
            </td>
            <td>
                {serivce.accesses}
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
    {/each}
    </tbody>
</table>